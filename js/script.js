const app = new Vue(
    {
        el:"#app",
        data: {
            logo: "img/uni-ROMA-sapienza.jpg",
            newExam: "",
            exams: [
                "Lingue Nordiche 1",
                "Letterature Nordiche 1",
                "Lingue Nordiche 2",
                "Letterature Nordiche 2",
                "Lingue Nordiche 3",
                "Letterature Nordiche 1"
            ],
        },
        methods: {
            addExam() {
                if (this.newExam.length > 0 && !this.exams.includes(this.newExam)) {
                    this.exams.push(this.newExam)
                } else if (this.exams.includes(this.newExam)) {
                    alert("Questo esame è già incluso in carriera!");
                };
                this.newExam = "";
            },
            delExam(x) {
                this.exams.splice(x, 1);
            }
        }
    }
);