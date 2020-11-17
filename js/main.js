var app = new Vue(
    {
        el: '#root',
        data: {
            carouselImg: 0,
            imgSrc: [
              'img/image1.jpg',
              'img/image2.jpg',
              'img/image3.jpg',
              'img/image4.jpg'
            ]

        },
        methods: {
            // prev e next
            nextRight() {
                this.carouselImg ++;
                if (this.carouselImg == this.imgSrc.length) {
                    this.carouselImg = 0;
                }
            },
            prevLeft() {
                this.carouselImg --;
                if (this.carouselImg < 0) {
                    this.carouselImg = this.imgSrc.length - 1;
                }
            },

        },


    });
