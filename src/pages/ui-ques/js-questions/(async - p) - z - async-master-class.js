// Fetch with timeout - race between fetch and timeout
function fetchWithTimeout(url, ms) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}

// First successful response (ignore failures)
function fetchFromAnyMirror(mirrors) {
  return Promise.any(mirrors.map(url => fetch(url)));
}

// Retry with exponential backoff
function fetchWithRetry(url, retries = 3) {
  return fetch(url).catch(err => {
    if (retries === 0) throw err;
    return new Promise(resolve =>
      setTimeout(resolve, 1000 * (4 - retries))
    ).then(() => fetchWithRetry(url, retries - 1));
  });
}

// Batch processing - process in chunks of 5
async function processBatch(items, batchSize = 5) {
  const results = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processItem));
    results.push(...batchResults);
  }

  return results;
}

// Your priority problem - settle all, then pick by priority
function resolveByPriority(promises) {
  return Promise.allSettled(promises.map(p => p.task))
    .then(results => {
      const sorted = results
        .map((r, i) => ({ ...r, priority: promises[i].priority }))
        .filter(r => r.status === 'fulfilled')
        .sort((a, b) => b.priority - a.priority);

      return sorted[0]?.value ?? Promise.reject('All failed');
    });
}