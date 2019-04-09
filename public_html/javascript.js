//// Funkcja do przyklejanego menu

$(document).ready(function(){
    var NavY = $('#nav').offset().top;
    
    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
        
        if(ScrollY > NavY){
            $('#nav').addClass('sticky');
        }
        else{
            $('#nav').removeClass('sticky');
        }
    };
    
    stickyNav();
    
    $(window).scroll(function(){
        stickyNav();
    });
    
    ////Funkcja do dropdown-u
    
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for(i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if(dropdownContent.style.display === "block"){
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
    
    ////Funkcja do MagnificPopup
    
    $('.images').magnificPopup({
        type: 'image'
    });
    
    $('.gallery-cont').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true}
    });
    
});

////Funkcje do guzików z latami

    function showYears(id){
        content = "";
        switch(id){
            case 1: content += showYear1(); break;
            case 2: content += showYear2(); break;
            case 3: content += showYear3(); break;
            case 4: content += showYear4(); break;
            case 5: content += showYear5(); break;
            case 6: content += showYear6(); break;
            case 7: content += showYear7(); break;
            default: content += showYear7(); 
        }
        document.getElementById('years').innerHTML = content;
    };
    
    function showYear1(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
         '<caption><h2>1950-1959</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>1950</td><td>7</td><td>Giuseppe Farina (Alfa Romeo)</td><td>Nie przyznawano</td></tr>' +
           ' <tr><td>1951</td><td>8</td><td>Juan Manuel Fangio(Alfa Romeo)</td><td>Nie przyznawano</td></tr>' +
           ' <tr><td>1952</td><td>8</td><td>Alberto Ascari(Ferrari)</td><td>Nie przyznawano</td></tr>' +
            '<tr><td>1953</td><td>9</td><td>Alberto Ascari(Ferrari)</td><td>Nie przyznawano</td></tr>' +
           ' <tr><td>1954</td><td>9</td><td>Juan Manuel Fangio (Maserati/Mercedes)</td><td>Nie przyznawano</td></tr>' +
            '<tr><td>1955</td><td>7</td><td>Juan Manuel Fangio (Mercedes)</td><td>Nie przyznawano</td></tr>' +
            '<tr><td>1956</td><td>8</td><td>Juan Manuel Fangio (Ferrari)</td><td>Nie przyznawano</td></tr> ' +
            '<tr><td>1957</td><td>8</td><td>Juan Manuel Fangio (Maserati)</td><td>Nie przyznawano</td></tr>' +
            '<tr><td>1958</td><td>11</td><td>Mike Hawthorn (Ferrari)</td><td>Vanwall</td></tr>' +
            '<tr><td>1959</td><td>9</td><td>Jack Brabham (Cooper)</td><td>Cooper</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;
    }
    
        function showYear2(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
          '<caption><h2>1960-1969</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>1960</td><td>10</td><td>Jack Brabham (Cooper)</td><td>Cooper</td></tr>' +
           ' <tr><td>1961</td><td>8</td><td>Phil Hill (Ferrari)</td><td>Ferrari</td></tr>' +
           ' <tr><td>1962</td><td>9</td><td>Graham Hill (BRM)</td><td>BRM</td></tr>' +
            '<tr><td>1963</td><td>10</td><td>Jim Clark (Lotus)</td><td>Lotus</td></tr>' +
           ' <tr><td>1964</td><td>10</td><td>John Surtees (Ferrari)</td><td>Ferrari</td></tr>' +
            '<tr><td>1965</td><td>10</td><td>Jim Clark (Lotus)</td><td>Lotus</td></tr>' +
            '<tr><td>1966</td><td>9</td><td>Jack Brabham (Brabham)</td><td>Brabham</td></tr> ' +
            '<tr><td>1967</td><td>11</td><td>Denny Hulme (Brabham)</td><td>Brabham</td></tr>' +
            '<tr><td>1968</td><td>12</td><td>Graham Hill (Lotus)</td><td>Lotus</td></tr>' +
            '<tr><td>1969</td><td>11</td><td>Jackie Stewart (Matra)</td><td>Matra</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;

    }
    
function showYear3(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
          '<caption><h2>1970-1979</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>1970</td><td>13</td><td>Jochen Rindt (Lotus)</td><td>Lotus</td></tr>' +
           ' <tr><td>1971</td><td>11</td><td>Jackie Stewart (Tyrrell)</td><td>Tyrell</td></tr>' +
           ' <tr><td>1972</td><td>12</td><td>Emerson Fittipaldi (Lotus)</td><td>Lotus</td></tr>' +
            '<tr><td>1973</td><td>15</td><td>Jackie Stewart (Tyrrell)</td><td>Lotus</td></tr>' +
           ' <tr><td>1974</td><td>15</td><td>Emerson Fittipaldi (McLaren)</td><td>McLaren</td></tr>' +
            '<tr><td>1975</td><td>14</td><td>Niki Lauda (Ferrari)</td><td>Ferrari</td></tr>' +
            '<tr><td>1976</td><td>16</td><td>James Hunt (McLaren)</td><td>Ferrari</td></tr> ' +
            '<tr><td>1977</td><td>17</td><td>Niki Lauda (Ferrari)</td><td>Ferrari</td></tr>' +
            '<tr><td>1978</td><td>16</td><td>Mario Andretti (Lotus)</td><td>Lotus</td></tr>' +
            '<tr><td>1979</td><td>15</td><td>Jody Scheckter (Ferrari)</td><td>Ferrari</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;
    }
    
    function showYear4(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
          '<caption><h2>1980-1989</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>1980</td><td>14</td><td>Alan Jones (Williams)</td><td>Williams</td></tr>' +
           ' <tr><td>1981</td><td>15</td><td>Nelson Piquet (Brabham)</td><td>Williams</td></tr>' +
           ' <tr><td>1982</td><td>16</td><td>Keke Rosberg (Williams)</td><td>Ferrari</td></tr>' +
            '<tr><td>1983</td><td>15</td><td>Nelson Piquet (Brabham)</td><td>Ferrari</td></tr>' +
           ' <tr><td>1984</td><td>16</td><td>Niki Lauda (McLaren)</td><td>McLaren</td></tr>' +
            '<tr><td>1985</td><td>16</td><td>Alain Prost (McLaren)</td><td>McLaren</td></tr>' +
            '<tr><td>1986</td><td>16</td><td>Alain Prost (McLaren)</td><td>Williams</td></tr> ' +
            '<tr><td>1987</td><td>16</td><td>Nelson Piquet (Williams)</td><td>Williams</td></tr>' +
            '<tr><td>1988</td><td>16</td><td>Ayrton Senna (McLaren)</td><td>McLaren</td></tr>' +
            '<tr><td>1989</td><td>16</td><td>Alain Prost (McLaren)</td><td>McLaren</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;
    }
    
        function showYear5(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
          '<caption><h2>1990-1999</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>1990</td><td>16</td><td>Ayrton Senna (McLaren)</td><td>McLaren</td></tr>' +
           ' <tr><td>1991</td><td>16</td><td>Ayrton Senna (McLaren)</td><td>McLaren</td></tr>' +
           ' <tr><td>1992</td><td>16</td><td>Nigel Mansell (Williams)</td><td>Williams</td></tr>' +
            '<tr><td>1993</td><td>16</td><td>Alain Prost (Williams)</td><td>Williams</td></tr>' +
           ' <tr><td>1994</td><td>16</td><td>Michael Schumacher (Benetton)</td><td>Williams</td></tr>' +
            '<tr><td>1995</td><td>17</td><td>Michael Schumacher (Benetton)</td><td>Benetton</td></tr>' +
            '<tr><td>1996</td><td>16</td><td>Damon Hill (Williams)</td><td>Williams</td></tr> ' +
            '<tr><td>1997</td><td>17</td><td>Jacques Villeneuve (Williams)</td><td>Williams</td></tr>' +
            '<tr><td>1998</td><td>16</td><td>Mika Häkkinen (McLaren)</td><td>McLaren</td></tr>' +
            '<tr><td>1999</td><td>16</td><td>Mika Häkkinen (McLaren)</td><td>Ferrari</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;
    }
    
    function showYear6(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
          '<caption><h2>2000-2009</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>2000</td><td>17</td><td>Michael Schumacher (Ferrari)</td><td>Ferrari</td></tr>' +
           ' <tr><td>2001</td><td>17</td><td>Michael Schumacher (Ferrari)</td><td>Ferrari</td></tr>' +
           ' <tr><td>2002</td><td>17</td><td>Michael Schumacher (Ferrari)</td><td>Ferrari</td></tr>' +
            '<tr><td>2003</td><td>16</td><td>Michael Schumacher (Ferrari)</td><td>Ferrari</td></tr>' +
           ' <tr><td>2004</td><td>18</td><td>Michael Schumacher (Ferrari)</td><td>Ferrari</td></tr>' +
            '<tr><td>2005</td><td>19</td><td>Fernando Alonso (Renault)</td><td>Renault</td></tr>' +
            '<tr><td>2006</td><td>18</td><td>Fernando Alonso (Renault)</td><td>Renault</td></tr> ' +
            '<tr><td>2007</td><td>17</td><td>Kimi Räikkönen (Ferrari)</td><td>Ferrari</td></tr>' +
            '<tr><td>2008</td><td>18</td><td>Lewis Hamilton (McLaren)</td><td>Ferrari</td></tr>' +
            '<tr><td>2009</td><td>17</td><td>Jenson Button (Brawn)</td><td>Brawn</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;
    }
    
    function showYear7(){
        content += ' <div class="years-show-table"> ' +
         ' <table class="years-table"> ' +
          '<caption><h2>2010-</h2></caption>' + 
         '<tr><th>Sezon</th><th>Liczba wyścigów</th><th>Mistrzostwo świata kierowców</th><th>Mistrzostwo świata konstruktorów</th></tr> ' +
          '<tr><td>2010</td><td>19</td><td>Sebastian Vettel (Red Bull)</td><td>Red Bull</td></tr>' +
           ' <tr><td>2011</td><td>19</td><td>Sebastian Vettel (Red Bull)</td><td>Red Bull</td></tr>' +
           ' <tr><td>2012</td><td>20</td><td>Sebastian Vettel (Red Bull)</td><td>Red Bull</td></tr>' +
            '<tr><td>2013</td><td>19</td><td>Sebastian Vettel (Red Bull)</td><td>Red Bull</td></tr>' +
           ' <tr><td>2014</td><td>19</td><td>Lewis Hamilton (Mercedes)</td><td>Mercedes</td></tr>' +
            '<tr><td>2015</td><td>19</td><td>Lewis Hamilton (Mercedes)</td><td>Mercedes</td></tr>' +
            '<tr><td>2016</td><td>21</td><td>Nico Rosberg (Mercedes)</td><td>Mercedes</td></tr> ' +
            '<tr><td>2017</td><td>20</td><td>Lewis Hamilton (Mercedes)</td><td>Mercedes</td></tr>' +
        '</table>' +
        '<br/> Źródło: wikipedia.pl' +
        '</div>';
        return content;
    }
    
    function pamietaj(){
        if(typeof(Storage) !== "undefined"){
            sessionStorage.setItem('imie', document.getElementById('imie').value);
            sessionStorage.setItem('nazwisko', document.getElementById('nazwisko').value);
            sessionStorage.setItem('mail', document.getElementById('mail').value);
            sessionStorage.setItem('phone', document.getElementById('phone').value);
            if(document.forms[0].powod[0].checked){
                var obiekt = document.forms[0].powod[0].value;
            }
            else if(document.forms[0].powod[1].checked){
                var obiekt = document.forms[0].powod[1].value;
            }
            else{
                var obiekt = document.forms[0].powod[2].value;
            }
            sessionStorage.setItem('powod', obiekt);
            sessionStorage.setItem('wiadomosc', document.getElementById('wiadomosc').value);
        }
    }
    
    function uzupelnij(){
        document.getElementById('imie').value = sessionStorage.getItem('imie');
        document.getElementById('nazwisko').value = sessionStorage.getItem('nazwisko');
        document.getElementById('mail').value = sessionStorage.getItem('mail');
        document.getElementById('phone').value = sessionStorage.getItem('phone');
        if(sessionStorage.getItem('powod') === "wspolpraca"){
            document.forms[0].powod[0].checked = true;
        }
        else if(sessionStorage.getItem('powod') === "wyjazd"){
            document.forms[0].powod[1].checked = true;
        }
        else if(sessionStorage.getItem('powod') === "inne"){
            document.forms[0].powod[2].checked = true;
        }
        document.getElementById('wiadomosc').value = sessionStorage.getItem('wiadomosc');
    };
    
    function wyczysc(){
        sessionStorage.clear();
    }