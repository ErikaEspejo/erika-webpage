async function renderClients() {
    const response = await fetch("../xml/facturacion.xml");
    const text = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");

    const clients = xmlDoc.getElementsByTagName("factura");

    for (let client of clients) {
    const identification = client.getElementsByTagName("identificacionCliente")[0].textContent;
    const name = client.getElementsByTagName("nombreCliente")[0].textContent;
    const address = client.getElementsByTagName("direccionCliente")[0].textContent;
    const phone = client.getElementsByTagName("telefonoCliente")[0].textContent;

    const card = document.createElement("div");
    card.classList.add("client-card");
    card.innerHTML = `<h3 class="client-name">${name}</h3>
                    <p class="client-id"><span>Identificación:</span> ${identification}</p>
                    <p class="client-address"><span>Dirección:</span> ${address}</p>
                    <p class="client-phone"><span>Teléfono:</span> ${phone}</p>`;
    document.querySelector(".clients-layout").appendChild(card);
  }
}