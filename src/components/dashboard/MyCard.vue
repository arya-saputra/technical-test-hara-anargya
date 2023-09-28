<template>
    <div class="rounded-lg bg-white border-2 w-4/12 overflow-hidden">
        <div class="top-content p-4 flex">
            <div class="number-info w-9/12">
                <div class="font-bold text-[14px] text-[#ccc]">
                    {{ title }}
                </div>
                <div class="font-bold text-black text-[30px]">
                    {{numberUp}},<span class="text-[#ccc]">{{ numberComma }}</span>
                </div>
            </div>
            <div class="number-action w-3/12 flex justify-end">
                <div class="font-bold w-[28px] h-[28px] bg-[#ccc] text-[16px] text-black rounded text-center">
                    %
                </div>
            </div>
        </div>
        <div class="w-full p-3 bg-[#f7f7f7] flex items-center justify-between">
            <div class="flex items-center w-8/12">
                <div class="number-percentage text-[18px] font-bold"
                    :class="{
                        'text-[#18c939]': trend=='up',
                        'text-[#e6093f]': trend=='down',
                        'text-[#00c4ff]': trend=='all'
                    }">
                    <span class="mr-3" v-if="trend=='up'">↗</span>
                    <span class="mr-3" v-else-if="trend=='down'">↘</span>
                    <span class="mr-3" v-else>-</span>

                    <span>{{ numberPercent }}%</span>
                </div>
                <div class="text-[#ccc] font-bold ml-3">
                    {{ year }}
                </div>
            </div>
            <div class="text-[#c4c4ce] w-4/12 font-bold text-right cursor-pointer">
                View More
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        trend:'all', // all, up, down
        year: 'last year',
        title: 'Pending',
        numberUp: 0,
        numberComma:10,
        numberPercent:2.15
    }
}
</script>