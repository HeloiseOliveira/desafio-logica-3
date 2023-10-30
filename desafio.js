class heroi{
    
constructor(nomeHeroi, idadeHeroi, tipoHeroi, ataqueHeroi){
  this.nome = nomeHeroi;
  this.idade = idadeHeroi;
  this.tipo = tipoHeroi;
  this.ataque = ataqueHeroi;
  }

}


    const heroi1 = new heroi('Tadeu', 40, 'mago', 'usou magia');
    const heroi2 = new heroi('Carlos', 27, 'guerreiro', 'usou espada');
    const heroi3 = new heroi('Tiago', 23, 'monge', 'usou artes maciais');
    const heroi4 = new heroi('Luana', 18, 'ninja', 'usou shuriken');
  
  console.log(`O ${heroi1.tipo} atacou usando ${heroi1.ataque}`);  
  console.log(`O ${heroi2.tipo} atacou usando ${heroi2.ataque}`); 
  console.log(`O ${heroi3.tipo} atacou usando ${heroi3.ataque}`); 
  console.log(`O ${heroi4.tipo} atacou usando ${heroi4.ataque}`); 