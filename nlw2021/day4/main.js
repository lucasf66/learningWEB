//variavies : let ou const
//let = alteravel e const = constante
const linksSocialMedia = {
  github: 'lucasf66',
  facebook: 'lucasf.66',
  instagram: 'lucasf.66',
  linkedn: 'lucasf66',
  twitter: 'teste',
  youtube: 'CursoEmVideo'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      linkGitHub.href = data.url
      userName.textContent = data.name
      bio.textContent = data.bio
      profile.src = data.avatar_url
      loginGitHub.textContent = data.login
    })
}
getGitHubProfileInfo()
