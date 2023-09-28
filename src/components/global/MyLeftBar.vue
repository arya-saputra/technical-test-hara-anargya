<template>
    <div class="min-h-screen bg-[#fafafa] w-2/12 text-[#333] px-5 py-7 border-x-2">
        <div class="text-4xl font-bold">Heylink.</div>

        <div class="mt-8 pl-2">
            <router-link to="/">
                <div
                    class="hover:bg-[#deeffc] cursor-pointer px-3 py-4 text-[14px] rounded-lg font-bold flex items-center mt-2"
                    :class="checkUrl('dashboard')? 'bg-[#deeffc]':''">
                    <span class="mr-3 text-[19px]">⏏</span> Dashboard
                </div>
            </router-link>
            <router-link to="/overview">
                <div
                    class="hover:bg-[#deeffc] cursor-pointer px-3 py-4 text-[14px] rounded-lg font-bold flex items-center mt-2"
                    :class="checkUrl('overview')? 'bg-[#deeffc]':''">
                    <span class="mr-3 text-[19px]">✉</span> Overview
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        const checkUrl = (path) => {
            return route.name == path
        }

        return {
            checkUrl
        }
    }   
}
</script>