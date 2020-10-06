function Fighter(object) {
    this.getName = () => object.name;
    this.getDamage = () => object.damage;
    this.getStrength = () => object.strength;
    this.getAgility = () => object.agility;
    this.getHealth = () => object.hp;

    let wins = 0;
    let loss = 0;

    this.addWin = () => wins++;
    this.addLoss = () => loss++;
    this.logCombatHistory = () => console.log(`Name:${object.name},Wins:${wins},Losses:${loss}`);

    this.heal = (value) => object.hp += value;
    this.dealDamage = (value) => object.hp > value ? object.hp -= value : object.hp = 0;

    const random = () => Math.random() * 101;
    const isSuccessful = random();

    this.attack = (defender) => {
        if (isSuccessful < (defender.agility + defender.hp))
            console.log(`${this.getName()} attack missed`);
        else {
            defender.dealDamage(this.getDamage);
            console.log(`${this.getName()} makes 25 damage to ${defender.getName()}`);
        }
    }

    this.isDead = () => {
        if (this.getHealth() == 0) {
            console.log(`${this.getName()} is dead`);
            return true;
        } else return false;
    }
}

const battle = function(fighter1, fighter2) {
    if (fighter2.isDead())
        return 0;

    while (!fighter2.isDead() || !fighter1.isDead()) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }

    if (fighter2.isDead() && fighter1.isDead())
        return 0;

    if (fighter2.isDead()) {
        fighter1.addWin();
        console.log(`${fighter1} has won!`);
        return fighter2;
    } else {
        fighter2.addWin();
        console.log(`${fighter2} has won!`);
        return fighter1;
    }
};

module.exports = { Fighter, battle };