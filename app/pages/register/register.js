document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("report-form");
  const dropdownItems = document.getElementById("dropdown-items");

  // Adicionando um evento ao formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    

    //Animação usando jquery e o animated CSS
    let pAnima = document.getElementById("success-alert");
  
    $(pAnima).slideDown(500, function () {
      pAnima.classList.add("animate__animated", "animate__tada");
    });


    
    // Captura os valores dos campos no momento do envio
    const inputName = document.getElementById("input-name").value.trim();
    const inputEmail = document.getElementById("input-email").value.trim();
    const inputTelefone = document.getElementById("input-telefone").value.trim();

    // Cria um novo item para o dropdown
    const newItem = document.createElement("li");
    newItem.classList.add("dropdown-item");
    newItem.textContent = `Nome: ${inputName}, E-mail: ${inputEmail}, Telefone: ${inputTelefone}`;

    // Adiciona o item ao dropdown
    dropdownItems.appendChild(newItem);

    // Salva os dados no localStorage
    saveToLocalStorage({ nome: inputName, email: inputEmail, telefone: inputTelefone });

    // Exibe o alerta de sucesso
    showSuccessAlert();

    // Limpa os campos do formulário
    form.reset();  
  });

  // Limpa o dropdown e o localStorage ao clicar no botão "Limpar"
  document.querySelector("button[type='reset']").addEventListener("click", function () {
    dropdownItems.innerHTML = ""; // Remove todos os itens do dropdown
    localStorage.removeItem("cadastros"); // Limpa os dados do localStorage
  });

  // Função para salvar os dados no localStorage
  function saveToLocalStorage(data) {
    let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    cadastros.push(data);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
  }

  // Função para carregar os dados salvos no localStorage
  function loadSavedData() {
    let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    cadastros.forEach((cadastro) => {
      const newItem = document.createElement("li");
      newItem.classList.add("dropdown-item");
      newItem.textContent = `Nome: ${cadastro.nome}, E-mail: ${cadastro.email}, Telefone: ${cadastro.telefone}`;
      dropdownItems.appendChild(newItem);
    });
  }

  // Carrega os dados salvos no localStorage ao carregar a página
  loadSavedData();

  // Função para exibir o alerta de sucesso
  function showSuccessAlert() {
    const successAlert = $("#success-alert");

    // Exibe o alerta com slideDown
    successAlert.slideDown(500); // 500ms = 0.5 segundos

    // Fecha o alerta automaticamente após 3 segundos (3000ms)
    setTimeout(function () {
      successAlert.slideUp(500); // Oculta o alerta com slideUp
    }, 3000); // 3000ms = 3 segundos
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("report-form");
  const termsCheckbox = document.getElementById("terms-checkbox");

  form.addEventListener("submit", function () {

    // Verifica se o checkbox foi marcado
    if (!termsCheckbox.checked) {
      termsCheckbox.style.outline = "2px solid red";
    } else {
      termsCheckbox.style.outline = "2px solid green";
    }
  });

  // Altera a cor da borda ao marcar/desmarcar o checkbox
  termsCheckbox.addEventListener("change", function () {
    if (termsCheckbox.checked) {
      termsCheckbox.style.outline = "2px solid green";
    } else {
      termsCheckbox.style.outline = "2px solid red";
    }
  });
});