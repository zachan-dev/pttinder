let imageThumbnail = document.getElementById('preview-thumbnail');

function previewImage(input)
{
  const file = input.files[0];
  imageThumbnail.setAttribute('src', URL.createObjectURL(file));
  imageThumbnail.style.display = "block";
}
