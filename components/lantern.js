var Lantern = pc.createScript('lantern');

Lantern.attributes.add('color', { type: 'rgb' });

Lantern.prototype.initialize = function () {
    this.activations = 0;

    this.entity.on('activation', this.onActivation, this);
};

Lantern.prototype.swap = function (old) {
    this.activations = old.activations;

    old.entity.off('activation', old.onActivation, old);
    this.entity.on('activation', this.onActivation, this);
};

Lantern.prototype.onActivation = function (activated) {
      if (this.activations > 0) {
        this.color.set(1, 0, 1);
    } else {
        this.color.set(0, 0, 0);
    }
};
