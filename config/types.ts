export type Superhero = {
  _id?: string;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: string[];
};

export type CardProps = Pick<Superhero, "_id" | "images" | "nickname">;

export type NewSuperhero = Omit<Superhero, "_id" | "images">;

export type InfoMessage = {
  type: "success" | "error";
  text: string;
};
