<template>
    <div>
    </div>
</template>
<script>
    import _ from 'lodash'
    export default {
        data() {
            return {
                lists: [1,2,0,3,4,null,5,6,7,false],
                viewer: {},
            }
        },
        methods: {
            init() {
                // chunk
                this.viewer.chunk = _.chunk(this.lists, 3)
                this.viewer.compact = _.compact(this.lists)
                this.viewer.difference = _.difference(this.lists, [1,2,3,4])
                this.viewer.flattenDeep = _.flattenDeep([1,2,3,[4,5,[1,5]]]);

                console.log(this.viewer);
            }
        },
        created () {
            this.init()
        },
    }
</script>