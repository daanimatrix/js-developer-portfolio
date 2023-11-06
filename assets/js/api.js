
async function fetchProfileData() {
    const url = 'https://api.github.com/repos/Minfermis/js-developer-portfolio/contents/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
