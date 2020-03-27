const brawlerComponent = {
    template:
    `
    <div style="display: flex; width: 100%">
        <figure class="media-left">
            <img class="image is-64x64 image is-64x92"
            v-bind:src="brawler.brawlerImage">
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        <a v-bind:href="brawler.url" class="has-text-info">{{brawler.nomeIta}}</a>
                        <a v-if="brawler.nomeIta !== brawler.nomeEng" v-bind:href="brawler.url" class="has-text-info" ><font color="red">{{brawler.nomeEng}}</font></a>
                        <span class="tag is-small">#{{brawler.id}}</span>
                    </strong>
                    <br>
                        {{brawler.descrizione}}
                    <br>
                        <p class="lista-piccola"><span class="red-text">Punti vita: </span>{{brawler.puntiVita}}</p>
                        <p class="lista-piccola"><span class="red-text">Attacco</span>: {{brawler.attacco}}</p>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24"
                        v-bind:src="brawler.avatar">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small" v-on:click="upVote(brawler.id)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{brawler.trofei}}</strong>
            </span>
        </div>
    </div>`,

    props: ['brawler', 'brawlers'],

    methods: {
        upVote(brawlerId){
            const brawler = this.brawlers.find(
                brawler => brawler.id === brawlerId
            );
            brawler.trofei++;
        }
    }
};


new Vue({
    el: '#app',
    
    data: {
        brawlers: Seed.brawlers
    },
    
    computed: {
        sortedBrawlers () {
            return this.brawlers.sort((a, b) => {
            return b.trofei - a.trofei
            });
        }
    },

    components: {
        'brawler-component': brawlerComponent
    }
});