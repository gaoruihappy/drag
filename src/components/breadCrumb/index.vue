<template>
    <div class="breadCrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in allData" :key="item.label">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'breadCrumb',
        props: {
            allData: {
                type: Array,
                default: function () {
                    return [{
                        label: '默认'
                    }]
                }
            }
        }
    }
</script>

