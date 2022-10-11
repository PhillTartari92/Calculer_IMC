function calculer(){

    var poids = document.getElementById('poids').value;
    var taille = document.getElementById('taille').value;
    var resultat = document.getElementById('resultat');
    var total = moyenne(poids,taille);
    let ecrit;

    if(poids == '' || poids == String || taille == '' || taille == String){
        alert('Veillez recommencer')
    }else if(total <= 14){
        ecrit = 'Vous êtes en souspoids';
    }else if(total > 14 && total <= 18.4){
        ecrit ='Vous êtes mince';
    }else if(total > 18.4 && total <= 23){
        ecrit ="Vous êtes en forme";
    }else if(total > 23 && total <= 30){
        ecrit =" Vous êtes en surpoids"
    }else{
        ecrit = 'DANGER';
    }

    resultat.innerHTML = ecrit;
}

function moyenne(poids, taille){
    return poids / (taille * 2);
}