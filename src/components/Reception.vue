<template>
  <div class="container mt-5">

    <div class="text-center mt-5 mb-5">
      <button class="btn btn-primary font-weight-bold" @click="lire = !lire">Lire plus</button>
      <div class="mt-3" v-if="lire">
        <h1 class="mots">Mugiwara</h1>
      </div>
      <div class="mt-3" v-else>
        <h1 class="mots-leger mb-4">L'equipage au chapeau de paille</h1>
        <h3 class="text-info font-weight-bold">Description morale</h3>
        <p>Luffy est quelqu'un de très puissant par sa volonté à tout épreuve. Il est prêt à tout risquer pour ses amis ainsi que ses rêves. Il est quelqu'un d'honnête, il ne connaît pas la perversion ni l'arnaque. C'est quelqu'un de bon qui n'hésite pas à venir en aide aux gens quand il sent que l'ennemi est mauvais. Luffy est très fort due à son pouvoir, mais son arme la plus puissante est le lien de l'amitié avec les Mugiwara. Ce lien si fort que jusqu a présent aucun ennemis quel qu'il soit n'a réussit à le défaire. Encore une fois, on peut facilement placé que Luffy est quelqu'un de très idiot. Dans sa tête il ne pense qu'à une chose...« La nourriture... ».</p>
        <h3 class="text-info font-weight-bold">Histoire</h3>
        <p>Monkey D.Luffy naquît à East Blue, son village d'enfance qui se nomme Fushia est une petite île de pécheurs. Depuis sa plus tendre enfance Luffy n'a qu'un seul rêve. Devenir pirate et plus précisément le Roi des Pirates ! Comme son idole « Gol D.Roger ». Dans son enfance il idolâtrait Shanks le roux un grand pirate qui plus tard on apprendra qu'il fait partit des quatre empereurs de la piraterie. Un jours dans une taverne du village ou se trouvais Shanks, Luffy avala un fruit du démon, le Gomu Gomu No Mi. Le transformant en homme élastique. Cet événement allait marquer pour toujours le destin du petit garçon. Avant de prendre la mer Shanks lui confiât son chapeau de paille, disant à Luffy d'en prendre soin car c'était son trésor. Depuis ce jour Luffy ne s'en sépare jamais, il y a lié une très grande valeur affective. C'était devenu son « trésor ». Après s'être entraîner pendant 10 ans sur son île, Luffy prît enfin la mer à bord d'un tonneau. Au cours d'innombrables aventures, il réussit petit à petit à rassembler un équipage digne de ce nom, son rêve c'était réalisé il était devenu pirate et même capitaine ! Les Mugiwaras comptent parmi eux : Roronoa Zoro, le bretteur du groupe et aussi tout premier membre. Nami la navigatrice, Sanji le cuisinier, Pipo le menteur ! Chopper le médecin, Franky l'ingénieur naval, Nico Robin l'archelogue et pour finir le petit dernier Brook le musicien. Au départ Luffy naviguait à bord du « Vogue Merry », plus tard vers Water Seven il devra abandonné son navire avec grand regret, en effet, toutes ses nombreuses aventures sur les mers l'ont rendu beaucoup trop endommagé et inutilisable. Franky lui construira plus tard le Thousand Sunny fait du même bois légendaire que l'Oro Jackson de Gol D. Roger, le navire qui a fait le tours du monde ! Luffy est le petit frère de Portgas D.Ace le commandant de la seconde flotte du terrible Barbe Blanche, et le fils de Monkey D.Dragon un grand révolutionnaire et qui est actuellement l'homme le plus rechercher au monde. Il porte le « D. » mystérieuse lettre que portent plusieurs grands pirates, on dit que ceux portant le D. sont voués à une grande destinée. Au fur des combats contres des ennemis de plus en plus forts, Luffy vu sa prime grandir, sa toute première prime était de 30.000 Berry pour avoir battu plusieurs pirates réputés dans East Blue. Il passera ensuite à 100.000.000 de Berry pour avoir battu Crocodile un Shichibukai très puissant.</p>
      </div>
    </div>

    <div class="text-center mt-5 mb-5" @click="recepfile">
      <button class="btn btn-primary font-weight-bold" @click="load = !load">les commentaires</button>
    </div>

    <transition name="bounce">
      <div class="tableau" v-if="load">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Pseudo</th>
              <th scope="col">Manga</th>
              <th scope="col">Episode</th>
              <th scope="col">Saison</th>
              <th scope="col">Avis Perso</th>
              <th scope="col">Delete</th>

            </tr>
          </thead>
          <tbody v-for="(perso, index) in clients">
            <tr>
              <th scope="row">{{ index }}</th>
              <th scope="row">{{ perso.nom }}</th>
              <td>{{ perso.manga }}</td>
              <td>{{ perso.episode }}</td>
              <td>{{ perso.saison }}</td>
              <td>{{ perso.avisManga }}</td>
              <td><button class="btn btn-danger" v-on:click="removeElement(index)">remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
      lire: true,
      clients: []
    };
  },
  methods: {
    recepfile() {
      this.$http
        .get("https://animepro-557be.firebaseio.com/anime.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const pirates = [];
          for (let key in data) {
            pirates.push(data[key]);
          }
          this.clients = pirates;
        });
    },

    removeElement(client, index) {
      this.$http.delete("https://animepro-557be.firebaseio.com/anime.json" + client.index)
        this.clients.splice(index, 1)
    }
  }
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>