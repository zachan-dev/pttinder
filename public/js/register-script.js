let userImageThumbnail = document.getElementById('user-image-thumbnail');
let petImageThumbnail = document.getElementById('pet-image-thumbnail');

function previewUserImage(input)
{
  const file = input.files[0];
  userImageThumbnail.setAttribute('src', URL.createObjectURL(file));
  userImageThumbnail.style.display = "block";
}

function previewPetImage(input)
{
  const file = input.files[0];
  petImageThumbnail.setAttribute('src', URL.createObjectURL(file));
  petImageThumbnail.style.display = "block";
}