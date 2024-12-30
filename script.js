/* Styles de base */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
    background-color: #f5f5f5;
    line-height: 1.6;
}

/* En-tête */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff200; /* Jaune dynamique */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #28a745; /* Vert écologique */
}

header nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

header nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 1rem;
    transition: color 0.3s, transform 0.3s;
}

header nav a:hover {
    color: #28a745;
    transform: scale(1.1);
}

/* Section Héro */
#hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #28a745, #7ec850);
    color: #fff;
    position: relative;
}

#hero h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

#hero .hero-image {
    max-width: 100%;
    height: auto;
    margin: 2rem 0;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#hero button {
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    background-color: #fff200; /* Jaune dynamique */
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
}

#hero button:hover {
    background-color: #ffd700; /* Jaune doré pour l'effet hover */
    transform: scale(1.05);
}

/* Section Fonctionnalités */
#features {
    padding: 3rem 2rem;
    background-color: #f9f9f9;
    text-align: center;
}

#features h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #28a745; /* Vert écologique */
}

#features ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 0;
    margin: 0;
}

#features li {
    text-align: center;
    flex: 1 1 calc(33.333% - 2rem);
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

#features li:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#features img {
    width: 60px;
    margin-bottom: 1rem;
}

#features p {
    font-size: 1rem;
    color: #555;
}

/* Section Contact */
#contact {
    padding: 3rem 2rem;
    background-color: #fff;
    text-align: center;
}

#contact h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #28a745; /* Vert écologique */
}

#contact form {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#contact input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

#contact input:focus {
    border-color: #28a745;
    outline: none;
}

#contact button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #28a745; /* Vert écologique */
    color: #fff; /* Blanc épuré */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
}

#contact button:hover {
    background-color: #218838; /* Vert légèrement foncé */
    transform: scale(1.05);
}

/* Pied de page */
footer {
    text-align: center;
    padding: 1rem;
    background-color: #f9f9f9;
    color: #777;
    font-size: 0.9rem;
    margin-top: 2rem;
}
