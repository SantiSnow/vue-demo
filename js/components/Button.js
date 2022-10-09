export default {
    template: `
        <button :class="{
                    'btn': true,
                    'primary': type == 'primary',
                    'secondary': type == 'secondary',
                    'warning': type == 'warning',
                    'spinner': processing == 'true'
                }" 
            :disabled="processing">
            <slot />    
        </button>
    `,

    
    data(){
        return{
            working: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    mounted()
    {
        console.log("buton cargado")
    }
}