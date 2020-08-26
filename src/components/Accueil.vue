<template>
    <div class="accueil">
       <h1 class="mots text-center">One Boy Edition</h1>
       <div class="container">
           <div class="text-center">
               <button class="btn btn-primary mt-3 " @click="show = !show" >
                Afficher les Personnages
                </button>
           </div>
           
            <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
            >
                <div class="row" v-if="show">
                    <div class="col-md-3">
                        <div class="card mt-5">
                                <img class="card-img-top" src="../assets/dofi.jpg" height="250" >
                                <div class="card-body text-center text-dark">
                                    <h4 class="card-title">Dofilamingo Don</h4>
                                    <p class="card-text">Dangereux dealer de stup de <br> Homing et sa famille se font pourchasser par les familles d'anciens esclaves. Doflamingo et sa famille ont dû quitter Marie-Joie, et se sont exilés dans une ville inconnue. Mais, cet exil est le commencement d'une vie infernale pour Doflamingo et sa famille. Les anciennes familles d'esclaves de la Famille Don Quichotte, traquèrent la famille, et malheureusement, la mère de Doflamingo se fit tuer </p>
                                    <a href="#" class="btn btn-primary">Don quichote</a>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mt-5">
                                <img class="card-img-top" src="../assets/katakuri.png" height="250" >
                                <div class="card-body text-center text-dark">
                                    <h4 class="card-title">Katakuri Charlotte</h4>
                                    <p class="card-text">Charlotte Katakuri est le 2e fils et le 3e enfant de <br>
                                        la Famille Charlotte,[1] et un triplé né en même temps qu'Oven et Daifuku.[4] Il est l'un <br> des trois Sweet Commanders de l'Équipage de Big Mom[3] ainsi que le Ministre de la Farine (粉大臣, Kona Daijin) gouvernant l'île du Blé.[4]
                                            En raison de ses actions, il est 
                                        le troisième antagoniste de l'Arc Whole Cake après Big Mom <br> en premier et Vinsmoke Judge en deuxième.</p>
                                    <a href="#" class="btn btn-primary">Charlotte</a>
                                </div>
                            </div>
                    </div><div class="col-md-3">
                        <div class="card mt-5">
                                <img class="card-img-top" src="../assets/senku.jpg" height="250" >
                                <div class="card-body text-center text-dark">
                                    <h4 class="card-title">Senku ishigami</h4>
                                    <p class="card-text">est un jeune lycéen passionné par la science. Il est le premier humain à s'être réveillé après la pétrification du monde. Son ambition est de reconstruire la civilisation moderne à partir de zéro, uniquement avec ce que la planète peut lui offrir.
                                    Il est le personnage principal du manga Dr.Stone. <br>adolescent mince et moyennement grand. Ses cheveux sont verts clairs, avec des reflets blancs. Deux mèche.</p>
                                    <a href="#" class="btn btn-primary">Senku</a>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mt-5">
                                <img class="card-img-top" src="../assets/lsace.jpg" height="250" >
                                <div class="card-body text-center text-dark">
                                    <h4 class="card-title">Dragon familly</h4>
                                    <p class="card-text">On le voit souvent porter un imperméable kaki et, récemment il a été vu portant l'uniforme des Révolutionnaires. Il possède un tatouage tribal rouge sur le côté gauche de son visage du front à la mâchoire, et a des cheveux noirs ébouriffés à la manière de Luffy (plus longs). On le voit souvent avec un sourire sinistre au visage. À l'exécution de Gol D. Roger, il y a 22 ans, il n'avait pas son tatouage tribal au visage. Il est cependant </p>
                                    <a href="#" class="btn btn-primary">D familly</a>
                                </div>
                            </div>
                    </div>
                </div>
            </transition>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show: false,
            }
        }
    }
</script>

<style>

</style>