
//** Import Rating Start */
import { starOne, starTwo, starThree, starFour, starFive } from "./ProductStar";

var exData = [
  {
    key: "102",
    previewImg:
      "https://thumbs.gfycat.com/ThatWellgroomedLiger-size_restricted.gif",
    title: "Stretches",
    difficulty: starTwo,
    impact: "beginner",
    calories: "760",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000",
    s_des:
      "Stretches are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Stretches are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "102",
    previewImg:
      "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1530743652042-8AW6T0MPM6Q0JYEV6AO9/image-asset.gif",
    title: "Squat",
    difficulty: starTwo,
    impact: "beginner",
    calories: "760",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/squat",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "104",
    previewImg:
      "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif",
    title: "Pull Ups",
    difficulty: starOne,
    impact: "beginner",
    calories: "450",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/pullup",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "105",
    previewImg:
      "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif",
    title: "Lifting",
    difficulty: starThree,
    impact: "beginner",
    calories: "450",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/deadlift",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "103",
    previewImg:
      "https://i.pinimg.com/originals/e3/93/d5/e393d50c6f4f5cc42d0b876f40488767.gif",
    title: "Push Ups",
    difficulty: starOne,
    impact: "beginner",
    calories: "300",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/pullup",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "106",
    previewImg:
      "https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif",
    title: "Situps",
    difficulty: starFour,
    impact: "beginner",
    calories: "50",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/squats",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "109",
    previewImg:
      "https://i.pinimg.com/originals/81/f1/23/81f1230ab56427e0bb86e2b3c2c6cb6f.gif",
    title: "Deadlifts",
    difficulty: starTwo,
    impact: "beginner",
    calories: "500",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/deadlift",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "107",
    previewImg: "https://media.tenor.com/fWiC9Ze5eUMAAAAC/lunges-exercise.gif",
    title: "Lunges",
    difficulty: starFive,
    impact: "beginner",
    calories: "50",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/lunges",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },

  {
    key: "110",
    previewImg:
      "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif",
    title: "Burpee",
    difficulty: starFour,
    impact: "beginner",
    calories: "50",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/squat",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },
  {
    key: "111",
    previewImg:
      "https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif",
    title: "Bench Press",
    difficulty: starFive,
    impact: "beginner",
    calories: "50",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },
  {
    key: "108",
    previewImg:
      "https://thumbs.gfycat.com/OpulentZanyBumblebee-size_restricted.gif",
    title: "Plank",
    difficulty: starThree,
    impact: "beginner",
    calories: "50",
    target_muscle: ["bones", "back", "legs", "quads"],
    link: "http://localhost:5000/",
    s_des:
      "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",

    l_des:
      "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
  },
];

export default exData;