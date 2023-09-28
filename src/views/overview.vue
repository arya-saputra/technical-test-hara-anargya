<template>
    <div class="text-[black]">
        <div class="tab flex justify-between w-4/12 gap-4">
            <div
                class="w-6/12 border-[#ccc] rounded-lg border-2 p-3 cursor-pointer flex justify-between"
                :class="tabName=='cities'? 'bg-[#deeffc] border-[navy]':'bg-white'"
                @click="tabName='cities'">
                <span>Cities</span>
                <span v-if="tabName=='cities'" class="text-[navy]">✔</span>
            </div>
            <div class="w-6/12 border-[#ccc] rounded-lg border-2 p-3 cursor-pointer flex justify-between"
                :class="tabName=='provinces'? 'bg-[#deeffc] border-[navy]':'bg-white'"
                @click="tabName='provinces'">
                <span>Provinces</span>
                <span v-if="tabName=='provinces'" class="text-[navy]">✔</span>
            </div>
        </div>
        
        <div>
            <div class="text-[32px] mt-10 font-bold uppercase mb-3">View {{ tabName }}</div>
            <CityTable v-if="tabName=='cities'" :headerObj="headerCity" :dataObj="allCity" :filterObj="allProv"></CityTable>
            <MyTable v-else :headerObj="headerProv" :dataObj="allProv" :filterObj="allCity"></MyTable>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import MyTable from '../components/overview/MyTable.vue';
import CityTable from '../components/overview/CityTable.vue';
import dataProv from '../assets/js/province';
import dataCity from '../assets/js/city'

export default {
    components: {
        MyTable,
        CityTable
    },
    setup() {
        const allProv = ref(dataProv);
        const allCity = ref(dataCity);
        const headerProv = ['id', 'name', 'wilayah_id'];
        const headerCity = ['id', 'provinsi_id', 'name'];
        const tabName = ref('cities');

        return {
            allCity,
            allProv,
            headerProv,
            headerCity,
            tabName
        }
    }
}
</script>