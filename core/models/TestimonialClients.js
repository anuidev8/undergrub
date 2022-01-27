function TestimonialModel({ id, name, content, profession, image }) {
  (this.id = id),
    (this.name = name),
    (this.content = content),
    (this.profession = profession),
    (this.image = image);
}

TestimonialModel.fromJSON = function (json) {
  return new TestimonialModel(json);
};

export default TestimonialModel;

export const example = new TestimonialModel({
  id: 1,
  name: "Tony Stark",
  content:
    "Creativos que supieron captar perfectamente la idea de lo que queríamos hacer. Intuitivos porque con una idea que les trasladamos supieron ampliar y trasladar al trabajo que han desempeñado. Hablan algo y escuchan mucho. Nosotros estamos contentos con Distintiva porque les consideramos unos buenos profesionales.",
  profession: "Engineer",
  image: "/assets/images/home/client.png",
});
