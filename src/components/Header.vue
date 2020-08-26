<template>
    <div>

        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">
                    <a>
                        <img src="../assets/logo.png" width="45" alt="" class="d-inline-block align-middle mr-2">
                        <span class="text-uppercase font-weight-bold">Newline</span>
                    </a>
                </router-link>
                

                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                 <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <router-link to="/"  class="nav-item active"><a class="nav-link">Accueil <span class="sr-only">(current)</span></a></router-link>
                        <router-link to="/contact"  class="nav-item"><a class="nav-link">Contact</a></router-link>
                        <router-link to="/reception"  class="nav-item"><a class="nav-link">Imprimer</a></router-link>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>