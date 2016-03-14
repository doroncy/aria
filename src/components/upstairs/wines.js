import React, { Component } from 'react';
import _ from 'lodash';

export default class Upstairs extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="pad-bottom-lg">
        <div className="menu-title font-ExBold">Wine Cellar</div>
        <div className="menu-subtitle font-ExBold">By the Glass</div>
        <ul className="no-bullet" ref="contentList">
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Sparkling</div>
            <p className="menuitem-description font-light">Cordon Negro, Freixenet, Brut Cava, Panades, Spain</p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">White</div>
            <p className="menuitem-description font-light">
              Grüner Veltliner, Ecker, Wagram, Austria ’13<br/>
              Gewürztraminer, Villa Wolf, Pfalz, Germany ’13<br/>
              Chardonnay Metzudah, Tzuba, Judean Mountains, Israel<br/>
              Riesling “Jean Baptiste” Kabinett, Gunderloch, Rhein, Germany ’12<br/>
              Petit Chablis, J. Moreau & Fils, Bourgogne, France ’13
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Red</div>
            <p className="menuitem-description font-light">
              Merlot, Tzuba, Judean Mountains, Israel ’11<br/>
              Cote De Rhone, Guigal, Rhone Valley, France ’11<br/>
              Pinot Noir, Jean Bouchard, Bourgogne, France ’11<br/>
              Rioja, Reserve, Muga, Spain ’11<br/>
              Cabernet Sauvignon, Chateau Golan, Golan Heights, Israel ’12
            </p>
          </li>
        </ul>
        <div className="menu-subtitle font-ExBold">375 ml.</div>
        <ul className="no-bullet" ref="contentList">
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Sparkling</div>
            <p className="menuitem-description font-light">Drappier, Carte d’Or Brut, Champagne, France N.V</p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">White</div>
            <p className="menuitem-description font-light">
              Soave, Cesari, Veneto, Italy ’12<br/>
              Sancerre Les Baronne, Henri Bourgeois, Loire Valley, France ’12
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Red</div>
            <p className="menuitem-description font-light">
              Chateau Cissac, Cru Bourgeois, Haut Medoc, Bordeaux, France ’07<br/>
              Cabernet Sauvignon, Lebanon Vineyard, Recanati, Upper Galilee, Israel ’10<br/>
              Amarone, Cesari, Veneto, Italy ’10
            </p>
          </li>
        </ul>
        <div className="menu-subtitle font-ExBold">By the Bottle</div>
        <ul className="no-bullet" ref="contentList">
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Sparkling</div>
            <p className="menuitem-description font-light">
              Domaine Huet, Vouvray, Petillant Brut, Loire France ’09<br/>
              Gaston Chiquet, Tradition Brut, Champagne, France N.V<br/>
              Pol Roger, Brut, Champagne, France N.V<br/>
              Laurent Perrier, Brut, Champagne, France N.V<br/>
              Laurent Perrier, Brut Rose, Champagne, France N.V<br/>
              Pol Roger, Sir “Winston Churchill” Vintage, Champagne, France ’00<br/>
              Moet & Chandon Imperial, France<br/>
              Moet & Chandon Rose, France<br/>
              Moet & Chandon Nectar, France<br/>
              Dom Perignon , France
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Whites</div>
            <div className="menuitem-name font-SemiBol">Israel</div>
            <p className="menuitem-description font-light">
              Chardonnay Metzudah, Tzuba, Judean Mountains ’13<br/>
              Viognier, Ortal, Upper Galilee ’13<br/>
              Lahat Lavan, Gush Etzion ’13<br/>
              Chardonnay, Clos De Gat, Judean Mountains ’12<br/>
              Chardonnay C, Castel, Judean Mountains ’13<br/>
              Sauvignon Blanc, Chateau Golan, Golan Heights ’13<br/>
              Sycra Chardonnay, Clos De Gat, Judean Mountains ’09
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">France</div>
            <p className="menuitem-description font-light">
              Tavel Rose, Chateau D’aqueria, Rhone Valley ’13<br/>
              Bourgogne Chardonnay, Jean Bouchard, Bourgogne ’09<br/>
              Petit Chablis, J. Moreau & Fils, Bourgogne ’13<br/>
              Chablis, Vaillons, Premier Cru, William Fevre, Bourgogne ’12<br/>
              Puligny Montrachet, Olivier Leflaive, Bourgogne ’08<br/>
              Chablis, Valmur, Grand Cru, J. Moreau & Fils, Bourgogne ’10<br/>
              Pouilly-Fume Jeunes Vignes, Henri Bourgeois, Loire ’13<br/>
              Sancerre, J. Moreau & Fils, Loire ’12<br/>
              Gentil, Hugel, Alsace ’13<br/>
              Pinot Blanc, Reserve, Weinbach, Alsace ’12
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Germany</div>
            <p className="menuitem-description font-light">
              Gewürztraminer, Villa Wolf, Pfalz ’13<br/>
              Gewürztraminer Trocken, Schäfer Fröhlich, Nahe ’12<br/>
              Riesling “Jean Baptist” Kabinett, Gunderloch, Rhein ’12<br/>
              Riesling Trocken, Donnhoff, Nahe ’12<br/>
              Riesling, Von Der Fels, Keller, Rhein ’13
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Austria</div>
            <p className="menuitem-description font-light">
              Grüner Veltliner, Ecker, Wagram, Austria ’13<br/>
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Italy</div>
            <p className="menuitem-description font-light">
              Masianco, Masi, Veneto ’12<br/>
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Reds</div>
            <div className="menuitem-name font-SemiBold">Israel</div>
            <p className="menuitem-description font-light">
              Merlot, Tzuba, Judean Mountains ’11<br/>
              Secret, Trio, Judean Mountains ’12<br/>
              Cabernet Sauvignon, Chateau Golan, Golan Heights ’12<br/>
              Ayalon Valley, Clos De Gat, Judean Mountains ’09<br/>
              Eliad, Chateau Golan, Golan Heights ’12<br/>
              Grand Vin, Castel, Judean Mountains ’12<br/>
              Sycra Syrah, Clos De Gat, Judean Mountains ’09
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">France</div>
            <p className="menuitem-description font-light">
              Pinot Noir, Jean Bouchard, Bourgogne ’11<br/>
              Bone De Chateau, Premier Cru, Bouchard, Bourgogne ’10<br/>
              Nuit Saint George, Louis Jadot, Bourgogne ’06<br/>
              Cote De Rhone, Guigal, Rhone Valley ’12<br/>
              Syrah ’Signe’ Rouge, Cave Yves Cuilleron, Rhone Valley ’13<br/>
              Châteauneuf Du Pape, Louis Bernard, Rhone Valley ’11<br/>
              Tuffe, Château Du Hureau, Saumur Champigny, Loire ’12
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Italy</div>
            <p className="menuitem-description font-light">
              Barbera D’alba, Pio Cesare, Piedmont ’12<br/>
              Barbaresco, Produttori, Piedmont ’10<br/>
              Sito Moresco, Gaja, Piedmont ’12<br/>
              Chianti Superiore, Banfi, Toscana ’12<br/>
              Tenuta Di Castiglioni, Frescobaldi, Toscana ’09<br/>
              Brunello Di Montalcino, Castelgiocondo, Frescobaldi, Toscana ’10<br/>
              Ripasso Mara, Cesari, Veneto ’11<br/>
              Campofiorin, Masi, Veneto ’12<br/>
              Amarone Della Valpolicella, Tommasi, Veneto ’11
            </p>
          </li>
          <li className="menuitem">
            <div className="menuitem-name font-SemiBold">Spain</div>
            <p className="menuitem-description font-light">
              Rioja, Reserve, Muga, Spain ’11
            </p>
          </li>
        </ul>
      </div>
    );
  }


}
