let AmigoSecreto = [];

function AgregarAmigo()
{
    NombreAmigo = document.getElementById('Amigos').value;

    if (NombreAmigo == "" )
        {
            alert('Por favor, inserte un nombre'); 
        }
    if (AmigoSecreto.includes(NombreAmigo)) 
        {
            alert(`El nombre ${NombreAmigo} ya se encuentra en la lista`);  
            return; 
        }
    
        AmigoSecreto.push(NombreAmigo);
        LimpiarCaja();
        ListadoAmigos();
}

function LimpiarCaja()
{
    document.getElementById('Amigos').value = '';
}

function ListadoAmigos()
{
    listadoIngreso = document.querySelector('#listaAmigos');

    listadoIngreso.innerHTML = ""

    for (let intentos = 0; intentos < AmigoSecreto.length; intentos++) 
    {
        var li = document.createElement('li');
        li.textContent = AmigoSecreto[intentos];
        listadoIngreso.appendChild(li);
    }
}

function SortearAmigo() 
{
    if (AmigoSecreto.length === 0) 
    {
        alert("No hay amigos para sortear");
        return;
    } 
        let Sorteo = Math.floor(Math.random() * AmigoSecreto.length);
        let AmigoSorteado = AmigoSecreto[Sorteo];
    
        let ListadoResultado = document.querySelector('#resultado');
        ListadoResultado.innerHTML = `Amigo Sorteado es: <Strong>${AmigoSorteado}</Strong>`;
}



