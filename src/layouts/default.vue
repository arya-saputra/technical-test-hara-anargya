<template>
    <section class="min-h-screen flex w-full h-full">
        <MyLeftBar></MyLeftBar>
        <div class="bg-white w-10/12 bg-[#f5f5f5]">
            <MyHeader></MyHeader>
            <div class="p-5 h-[90vh] overflow-scroll">
                <RouterView></RouterView>
            </div>
        </div>
    </section>
</template>
<script>
import MyHeader from '../components/global/MyHeader.vue';
import MyLeftBar from '../components/global/MyLeftBar.vue';

export default {
    components: {
        MyHeader,
        MyLeftBar
    }
}
</script>