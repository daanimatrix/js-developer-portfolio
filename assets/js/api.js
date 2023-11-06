async function fetchProfileData() {
    const url = 'https://api.github.com/repos/Minfermis/js-developer-portfolio/contents/data/profile.json';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // Decodifica os dados, pois estão em base64
            const profileData = JSON.parse(atob(data.content));
            return profileData;
        } else {
            throw new Error('Erro ao obter os dados');
        }
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}
