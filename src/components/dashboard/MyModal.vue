<template>
    <div class="fixed w-full h-screen top-0 left-0 bg-[#00000059] text-black flex items-center justify-center">
        <div class="w-4/12 h-[40vh] bg-white rounded p-4 flex">
            <div class="flex items-center h-[10vh] w-10/12">
                <img class="w-[80px] h-[80px] rounded-full" :src="dataObj.profile_picture" />
                <div class="user-info ml-4 font-bold">
                    <h3 class="text-[35px]">{{ dataObj.first_name }} {{ dataObj.last_name }}</h3>
                    <div>{{ dataObj.email }}</div>
                    <div>{{ dataObj.phone }}</div>
                </div>
            </div>
            <div class="w-2/12 text-right">
                <div class="text-[red] text-[30px] cursor-pointer font-bold" @click="closeModal">X</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        dataObj: {
            type:Object,
            default() {
                return {}
            }
        },
    },
    setup({}, ctx) {
        const closeModal = () => {
            ctx.emit('onClose');
        }
        return {
            closeModal
        }
    }
}
</script>