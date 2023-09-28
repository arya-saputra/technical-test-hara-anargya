<template>
    <div class="toolbar flex justify-between text-black mb-5 gap-4">
        <div class="flex gap-2 w-4/12 items-center">
            <input
            v-model="filterName"
            placeholder="Search Province..."
            class="w-full p-2 bg-white rounded-lg border-[#ccc] border-2"
            type="text" />
        </div>
        <div class="flex gap-2 w-4/12 items-center">
            <select class="border-[#ccc] border-2 rounded-lg bg-white py-[9.5px] px-3 w-full" v-model="filterId">
                <option value="">-- All Cities --</option>
                <option v-for="filter in filterObj" :value="filter.provinsi_id">{{ filter.name }}</option>
            </select>
        </div>
        <div class="flex gap-2 w-4/12 items-center justify-end">
            <div>Sort by</div>
            <button
                v-for="(head,key) in headerObj"
                class="border-[#ccc] border-1 bg-white px-3 uppercase font-bold"
                :class="sortName==head? 'bg-[#ccc] text-[#fff]':''"
                @click="sortData(head)">{{ head }}</button>
        </div>
    </div>
    <table class="table-auto w-full bg-white rounded-lg">
        <thead class="bg-[#fafafa] text-[15px] text-black">
            <tr>
                <th v-for="(head,key) in headerObj" class="p-2 text-left uppercase cursor-pointer" @click="sortData(head)">
                    <div class="flex justify-between items-center">
                        <div>{{ head }}</div>
                        <div v-if="sortName==head">
                            <div v-if="sortType=='asc'">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                            </div>
                            <div v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </div>
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody class="text-[#303030] text-[15px]">
            <tr v-for="(data,key) in sortedData" :key="key" class=" hover:bg-[#f4f4f4]">
                <td class="p-2">{{ data.id }}</td>
                <td class="p-2">{{ data.name }}</td>
                <td class="p-2">{{ data.wilayah_id }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
export default {
    props: {
        headerObj:  {
            type:Array,
            default() {
                return []
            }
        },
        dataObj: {
            type:Array,
            default() {
                return []
            }
        },
        filterObj: {
            type:Array,
            default() {
                return []
            }
        }
    },
    setup(props) {
        const sortName = ref('id');
        const sortType = ref('desc');
        const filterName = ref('');
        const filterId = ref('');
        const sortedData = computed(() => {
            const filter_name = props.dataObj.filter(item => {
                const name = item.name;
                return name.toLowerCase().indexOf(filterName.value.toLowerCase()) > -1;
            })

            if (filterId.value) {
                return filter_name.filter(item => {
                    return item.id == filterId.value;
                })
            }

            return filter_name.sort((a,b) => {
                if (sortName.value=='id') {
                    if (sortType.value == 'desc') {
                        return (a.id - b.id);
                    } else {
                        return (b.id - a.id);
                    }
                } else if (sortName.value == 'name') {
                    if (sortType.value == 'desc') {
                        if (a.name < b.name)
                        return -1
                        if (a.name > b.name)
                        return 1;
                    }else{
                        if (a.name < b.name)
                        return 1
                        if (a.name > b.name)
                        return -1;
                    }
                } else if (sortName.value == 'wilayah_id') {
                    if (sortType.value == 'desc') {
                        return (a.wilayah_id - b.wilayah_id);
                    } else {
                        return (b.wilayah_id - a.wilayah_id);
                    }
                } else {
                    return filter_name;
                }
            });
        });

        
        const sortData = (name) => {
            sortName.value = name;
            if (sortType.value == 'desc') {
                sortType.value = 'asc';
            } else {
                sortType.value = 'desc';
            }
        };

        return {
            sortName,
            sortType,
            sortedData,
            filterName,
            filterId,
            sortData
        }
    }
}
</script>