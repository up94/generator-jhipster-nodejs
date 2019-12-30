/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityServerGenerator = require('generator-jhipster/generators/entity-server');
const writeFiles = require('./files').writeFiles;

const fieldTypes = {
    Boolean: 'boolean',
    Integer: 'integer',
    Long: 'long',
    Float: 'float',
    Double: 'double',
    BigDecimal: 'Decimal',
    String: 'string',
    UUID: 'string',
    LocalDate: 'Date',
    Instant: 'Timestamp',
    ZonedDateTime: 'Datetime',
    AnyBlob: 'Blob',
    ImageBlob: 'Blob',
    Blob: 'Blob',
    TextBlob: 'Blob',
    'byte[]': 'Blob'
};

module.exports = class extends EntityServerGenerator {
    constructor(args, opts) {
        super(args, Object.assign({ fromBlueprint: true }, opts)); // fromBlueprint variable is important

        const jhContext = (this.jhipsterContext = this.options.jhipsterContext);

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprints nodejs')}`);
        }

        this.configOptions = jhContext.configOptions || {};
    }

    get writing() {
        return writeFiles();
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }

    getTsType(fieldType) {
        return fieldTypes[fieldType] || 'any';
    }
};
