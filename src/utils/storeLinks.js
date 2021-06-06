import AsyncStore from '@react-native-async-storage/async-storage';

// Buscar os links salvos.
export async function getLinksSave(key) {
    const myLinks = await AsyncStore.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
};

// Salvar um link no storage.
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    // Se tiver algum link salvo com esse mesmo ID / ou duplicado preciso ignorar.
    const hasLink = linksStored.some( link => link.id === newLink.id );

    if(hasLink) {
        console.log('ESSE LINK JÁ EXISTE NA LISTA');
        return;
    };

    linksStored.push(newLink);

    await AsyncStore.setItem(key, JSON.stringify(linksStored));
};

// Deletar algum link especifico.
export async function deleteLink(links, id) {
    let myLinks = links.filter( (item) => {
        return (item.id !== id);
    });

    await AsyncStore.setItem('sujeitolinks', JSON.stringify(myLinks));

    return myLinks;
};