import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';
import computed from 'flarum/utils/computed';

export default class Extension extends mixin(Model, {
    package: Model.attribute('package'),
    title: Model.attribute('title'),
    description: Model.attribute('description'),
    license: Model.attribute('license'),

    stars: Model.attribute('stars'),
    forks: Model.attribute('forks'),
    downloads: Model.attribute('downloads'),

    installed: Model.attribute('installed'),
    enabled: Model.attribute('enabled'),
    installed_version: Model.attribute('installed_version'),

    can_install: computed('installed', installed => !installed),
    can_uninstall: computed('installed', 'enabled', (installed, enabled) => installed && !enabled)
}) {}
