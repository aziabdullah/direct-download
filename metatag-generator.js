function generateMetatags() {
  var metaContent = '';
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var author = document.getElementById('author').value;
  var publisher = document.getElementById('publisher').value;
  var charset = document.getElementById('charset').value;
  var canonical = document.getElementById('canonical').value;
  var robots = document.getElementById('robots').value;

  if (title) {metaContent += '<title>' + title + '</title>' + "\n"}
  if (description) {metaContent += '<meta name="Description" content="' + description + '">' + "\n"}
  if (author) {metaContent += '<meta name="Author" content="' + author + '">' + "\n"}
  if (publisher) {metaContent += '<link rel="Publisher" href="' + publisher + '">' + "\n"}
  if (charset) {metaContent += '<meta name="charset="' + charset + '">' + "\n"}
  if (canonical) {metaContent += '<link rel="Canonical" href="' + canonical + '">' + "\n"}
  if (robots) {metaContent += '<meta name="Robots" content="' + robots + '">' + "\n"}

  document.getElementById('metaContent').value = metaContent;
}

