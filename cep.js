
      async function buscar() {
        var cep = document.getElementById("cep").value;

        var url = `https://viacep.com.br/ws/${cep}/json/`;
        
        var resultado = await fetch(url);
        var json = await resultado.json();

        document.getElementById("logradouro").textContent = json.logradouro || "";
        document.getElementById("bairro").textContent = json.bairro || "";
        document.getElementById("cidade").textContent = json.localidade || "";
      }
