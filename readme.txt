--------------------------------------------------------------------------------
                                    README
--------------------------------------------------------------------------------

Nom     : Diakite
Prenom  : Boubacar Sidiki
initial : bsd
          http://pagesperso.univ-brest.fr/~e21505297/
    
html m'a permis de donner une structure, une autre vision à mon cv que 
j'ai habillé avec CSS(Cascading Style Sheets), repasse avec JS(JavaScript)
pour parfaire l'animation se trouvant dans les differents partie de la structure
Le site contient six (6) pages html dont la page index.hrml, deux (2) css, 
deux (2) javascript dont une librairie jquery,quatroze (14) images, 
un fichier prêt pour telechargement, des test du site sur cinq (5) navigateurs
Safari, chrome, firexfox, Opera et Internet Explorer(IE) avec ceux des smartphones
Samsung, Iphone et Blackberry avec test positive.

 
Le lien vers mon site Web : http://pagesperso.univ-brest.fr/~e21505297/
 
--------------------------------------------------------------------------------
                                    HTML
--------------------------------------------------------------------------------
L'élément HTML <noscript> défini la  feuille de style fallback qui 
doit être fonctionnelle s'il n'est pas pris en charge ou encore 
si les scripts ont été désactivés par défaut dans le navigateur.
nous avons utilisé des sections, des div pour la division qui 
contiennent des id et des class pour nos selecteurs contruitent 
dans nos differents pages CSS.
			


Dans la valide <head>...</head> il ya :		
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
La balise méta viewport permet de définir les dimensions de la page 
web mais aussi sa hauteur et son zoom. 
Elle est utile pour l’affichage du siteWeb sur les smartphones et les tablettes.

les balises <link ...> font reference endroit où se trouvent les differents 
fichiers (css, js, doc, images) liées à la page html.

Dans les valises <body>...</body> se trouvent les contenus sur les quelles 
j'ai appliqué les regles css aux quelles je fais appelle dans les balises <head>...</head>.
j'ai commencé par les premières bloques "wrapper":
les divisions "wrapper" qui ont des 
deux (2)attributs id="wrapper" et class="wrapper" faisant reférences 
aux selecteurs #wrapper et .wrapper) avec les differents imbrications de balises qui en suitent



1 header(Accueil)
2 aboutme
3 technical
4 experience
5 education
6 contact

1 header 
    contient trois (3) <div>...</div>
    1.0 div banniere sous forme de ligne avec pour id=banner et class=banner row
    2.1 contenu de la banniere
    3.2 div menu
2 section aboutme 
    2.0 un div pour le contenu....
        2.0.0 div class=heading...
        2.0.1 div class=row...
3 section technical
    3.0 un div pour le contenu...
4 experience
    4.0 un div pour le contenu...
5 education
    5.0 un div pour le contenu...
6 contact
    6.0 une section detaillant mes contacts...
    6.1 une section le pied de page contenant 
        les images/liens vers linkedin et viadeo avec mes initiales bsd
        
--------------------------------------------------------------------------------
                                    CSS
--------------------------------------------------------------------------------


J'ai beaucoup appris des cours de Professeur V.Marc et aussi
des differents sites sur les quels, j'ai trouvé des explications étapes 
par étapes du pourquoi du comment des différents selecteurs 
(ID, CLASS et autres ) comment le fait de pouvoir imbréquer les uns dans
des autres sélon nos besoins.

j'ai fait des tests unitaires (c'est à dire tester toutes 
les proppriétés des différents règles que j'ai choisi)
pour pouvoir constructeurs mes règles.

--------------------------------------------------------------------------------
                                    JS
--------------------------------------------------------------------------------

Nous avons utilisé quelques Scripts de JS et JQuery pour mieux embellir 
notre site. Sur chaque sites d'apprentissage les différentes étapes sont 
bien indiquées pour mieux comprendre JS:

La balise méta viewport permet de définir les 
<!--modernizr js-->
src="js/modernizr.custom.26633.js"

<!--jquery min js-->
src="js/jquery.min.js"
bsdscript.js c'est le script qui m'ont beaucoup de temps 
avant de pouvoir le mettre en place

--------------------------------------------------------------------------------
                                    CONCLUSION
--------------------------------------------------------------------------------
Parcontre les validateurs html et css ne reconnaissent pas certaines l'utilisation
de certaines synthaxes qui sont autorisé par tous les navigateurs sauf Internet Explorer
qui est toujours en retard par rapport aux autres Navigateurs cité ci-dessus.

--------------------------------------------------------------------------------
                                    SUGGESTIONS
--------------------------------------------------------------------------------
    
si je devrais suggérer des sites pour apprendre HTML/CSS/JS (les Trois TRIPPLETS).
je commencerai par:
   1-LES TEACHERS DU NET SUR YOUTUBE
   2-3WC School pour ceux qui se debrouillent en Anglais
   3-MDN pour ceux qui n'aiment pas beaucoup l'anglais et je leur conseillera 
d'apprendre l'anglais pour mieux avance dans le developpement WEB. 

les differents liens:

HTML et CSS
https://www.youtube.com/watch?v=YT7eJufmOQM&list=PLlxQJeQRaKDTtaDf3C8gNtjhjLmKTvDF3

JavaScript
https://www.youtube.com/watch?v=vjREjPz5sjk&list=PLlxQJeQRaKDQVpSsy6ORfpamB-x6cEpgF

JQuery
https://www.youtube.com/watch?v=mfIOG2vlrVg&list=PLlxQJeQRaKDSg1_ckvFFcONJghKc5w4t6

3WC
http://www.w3schools.com/

MDN
https://developer.mozilla.org/fr/

Ils me permettent de mieux voir rapidement et directement les effects produits.
