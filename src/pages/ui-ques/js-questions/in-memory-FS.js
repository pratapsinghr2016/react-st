class FileSystem {

  constructor() {
    this.root = { _files: [], _directories: {} };
    this.currentDirectory = this.root;
    this.currentPath = "/"
  }

  createDirectory(dirName) {
    if (!this.currentDirectory._directories[dirName])
      this.currentDirectory._directories[dirName] = { _files: [], _directories: {} }
  }

  changeDirectory(path) { // 
    if (path === "/") {
      this.currentDirectory = this.root;
      this.currentPath = "/"
    }

    const pathParts = path.split("/").filter(Boolean); //

    let node = this.root;

    for (let pathItem of pathParts) {
      if (!node._directories[pathItem]) {
        console.log("directory path dont exist")
        return false
      }

      node = node._directories[pathItem]
    }

    this.currentDirectory = node;
    this.currentPath = "/" + pathParts.join("/");
  }


  addFile(fileName) {
    if (!this.currentDirectory._files.includes(fileName)) {
      this.currentDirectory._files.push(fileName)
    }
  }

  deleteFile(fileName) {
    const index = this.currentDirectory._files.indexOf(fileName)
    if (index > -1) {
      this.currentDirectory._files.splice(index, 1)
    }
  }

  deleteDirectory(dirName) {
    delete this.currentDirectory._directories[dirName]
  }

  ls() {
    return {
      directories: Object.keys(this.currentDirectory._directories),
      files: this.currentDirectory._files
    }
  }

  getRootDirectory() {
    return this.currentDirectory._directories;
  }

}


const dir = new FileSystem();
dir.createDirectory('prashant');
dir.changeDirectory('/prashant');        // Changed from 'root-prashant'
dir.addFile('index.html');
dir.addFile('app.js');
dir.changeDirectory('/');                // Changed from 'root'
dir.createDirectory('practice');
dir.changeDirectory('/practice');        // Changed from 'root-practice'
dir.addFile('index.html');
dir.addFile('app.js');
dir.createDirectory('build');
dir.changeDirectory('/practice/build');  // Changed from 'root-practice-build'
dir.addFile('a.png');
dir.addFile('b.jpg');
dir.deleteFile('a.png');
dir.changeDirectory('/');
dir.deleteDirectory('prashant');
console.log(JSON.stringify(dir.getRootDirectory(), null, 2));