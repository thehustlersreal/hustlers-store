var app = new Vue({
    el: '#wrapper',
    data: {
        pages: [
            {
                label: 'PayPal Transfer',
                active: true,
                icon: 'sr-hand-holding-usd',
                products: [
                    {
                        name: '1200$ Transf.',
                        label: '12% EXTRA',
                        price: '100,00$',
                        thumbnail: 'https://i1.sndcdn.com/artworks-wxim7o544nVmciWM-ztXlEw-t500x500.jpg'
                    },
                    {
                        name: '1200$ Transf.',
                        label: '12% EXTRA',
                        price: '100,00$',
                        thumbnail: 'https://i1.sndcdn.com/artworks-wxim7o544nVmciWM-ztXlEw-t500x500.jpg'
                    },
                    {
                        name: '1200$ Transf.',
                        label: '12% EXTRA',
                        price: '100,00$',
                        thumbnail: 'https://i1.sndcdn.com/artworks-wxim7o544nVmciWM-ztXlEw-t500x500.jpg'
                    },
                    {
                        name: '1200$ Transf.',
                        label: '12% EXTRA',
                        price: '100,00$',
                        thumbnail: 'https://i1.sndcdn.com/artworks-wxim7o544nVmciWM-ztXlEw-t500x500.jpg'
                    },
                    {
                        name: '1200$ Transf.',
                        label: '12% EXTRA',
                        price: '100,00$',
                        thumbnail: 'https://i1.sndcdn.com/artworks-wxim7o544nVmciWM-ztXlEw-t500x500.jpg'
                    },
                ]
            },
            {
                label: 'White CC',
                active: false,
                icon: 'sr-credit-card'
            },
            {
                label: 'Fake Money',
                active: false,
                icon: 'sr-money-bills-simple'
            },
            {
                label: 'V-Bucks',
                active: false,
                icon: 'sr-usd-circle'
            },
        ]
    },
    methods() {

    },
    mounted() {

    },
    created() {
        console.log('Active');
    }
})