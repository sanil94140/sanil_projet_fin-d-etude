<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="bootstrap.min.css" />
    <link rel="stylesheet" href="categorie.css" />

    <title>Document</title>
  </head>
  <body>
    <div class="collection w-100 my-5 py-4">
      <?php for($i=1; $i<10; $i++);
      { 
      echo "<p>$i</p>";?>

      <section class="image m-2">
        <a href="" >
          <img
            src="home-bodybuilding.jpg"
            alt="article 1"
          />
        </a>
        <div class="text-center">
          <a href="!#" class="btn btn-info mt-2 mx-2">
            <h2>Chaussure 1</h2>
          </a>
          <p>20€</p>
        </div>
      </section>
      <?php } ?>
    </div>
  </body>
</html>
