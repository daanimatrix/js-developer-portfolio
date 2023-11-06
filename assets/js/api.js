async function fetchProfileData() {
    const url = 'https://avatars.githubusercontent.com/u/133699469?s=400&u=1b688bc80bbe9e9a3ef378000b18d89c9b8e3f01&v=4';
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
