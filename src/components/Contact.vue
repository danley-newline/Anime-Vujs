<template>
    <div class="container">
        
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Pseudo</label>
                        <input type="text" class="form-control" v-model="client.nom">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Manga Name</label>
                        <input type="text" class="form-control" v-model="client.manga">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Episode</label>
                        <input type="number" class="form-control" v-model.number="client.episode">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Saison ou Arc</label>
                        <input type="text" class="form-control" v-model="client.saison" value="Saison ">
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="">Avis personel du manga</label>
                <textarea class="form-control" id="" rows="5" v-model="client.avisManga"></textarea>
            </div>

                <div class="text-center">
                    <button class="btn btn-success" type="submit"  @click="sendManga">Nous Envoyer</button>
                </div>
        </div>
</template>

<script>
    export default {
        data(){
            return{
                client:{
                    nom: '',
                    manga: '',
                    episode: 0,
                    saison: '',
                    avisManga: ''
                }
            }
        },
        methods:{
            sendManga(){
                this.$http.post('https://animepro-557be.firebaseio.com/anime.json', this.client)
                .then(response => {
                    console.log(response);
                }),(error => {
                    console.log(error);
                })
            }
        }
    }
</script>
