let cep = document.getElementById("cep");

fetch("https://viacep.com.br/ws/${cep}/json/")
                                              .then(res => res.json())
                                              
