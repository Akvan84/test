const Parallax = async () => {
  let data = await fetch("https://akvan84.github.io/JsonServer/db.json");
  let res = await data.json();
  let parallax = `<div style="width: 100%;
    height: calc(100vh - 40px);
    background: url(${res.parallax.image})
      no-repeat center center fixed;
    object-fit: cover; position:relative;"></div>
    <div class="text">
    <h1>Hello-world!!!</h1>
    <p>
    
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum accusamus molestiae accusantium vitae nesciunt aspernatur voluptatum asperiores. Amet neque, animi cum vero fugiat corrupti quod autem aspernatur delectus quisquam recusandae facere commodi dolores nobis harum minima accusantium deserunt ratione dolor provident unde nulla libero inventore. Accusamus temporibus facere quaerat harum! Dicta voluptates, architecto assumenda accusantium recusandae ipsa eius maiores, maxime placeat voluptas, autem ad amet. Aperiam sint adipisci modi a ducimus, dicta reiciendis nihil aspernatur odio culpa eligendi! Vel perspiciatis nemo ipsa cum, dolorem ut ipsam dicta asperiores officiis porro adipisci non. Eius pariatur commodi at modi reiciendis harum!
    </p>
    </div>
    `;
  document.querySelector(".parallax").innerHTML = parallax;
};

export default Parallax;
