import lf from 'lovefield';

var LovefieldService = function(){
  this._db = null;
  this._observation = null;
  this._condition = null;
}

LovefieldService.prototype.buildSchema_ = function() {
var schemaBuilder = lf.schema.create('curadb', 1);
/**
 * @objc dynamic var key : String = ""
    @objc dynamic var string : String?
    @objc dynamic var unit : String?
    @objc dynamic var _list : StringList?
    @objc dynamic private var _date : CuraDate_rlm?
    @objc dynamic private var _secondaryDate : CuraDate_rlm?
    var list : [String]? { return _list?.items }
    var date : NullableDateRepresentation? {return _date?.dateRepresentation}
    var secondaryDate : NullableDateRepresentation? {return _secondaryDate?.dateRepresentation}
    @objc dynamic var isDirty : Bool = false
    @objc dynamic private var _status = Status.final.rawValue
    @objc public dynamic var method : String?
    public let bodySites = List<StringWrapper>()
    public let valueObjects = List<ObservationValueObject_rlm>()
    public let components = List<FHIRReferenceObject_rlm>()
    public let images = List<CuraImage_rlm>()
    @objc dynamic public var recordedDate:Date! = Date()
    
    @objc dynamic var clientId = ""
    let id = RealmOptional<Int>()
    @objc public dynamic var _encounterId = ""
    @objc private dynamic var _patientId = ""
 */
schemaBuilder.createTable('Observation').
      addColumn('key', lf.Type.STRING).
      addColumn('string', lf.Type.STRING).
      addColumn('unit', lf.Type.STRING).
      addColumn('_list', lf.Type.STRING).
      addColumn('_date', lf.Type.DATE_TIME).
      addColumn('_secondaryDate', lf.Type.STRING).
      addColumn('isDirty', lf.Type.INTEGER).
      addColumn('_status', lf.Type.INTEGER).
      addColumn('method', lf.Type.INTEGER).
      addColumn('bodySites', lf.Type.INTEGER).
      addColumn('valueObjects', lf.Type.INTEGER).
      addColumn('components', lf.Type.INTEGER).
      addColumn('images', lf.Type.INTEGER).
      addColumn('recordedDate',lf.Type.DATE_TIME).
      addColumn('clientId', lf.Type.INTEGER).
      addColumn('id', lf.Type.INTEGER).
      addColumn('_encounterId', lf.Type.INTEGER).
      addColumn('_patientId', lf.Type.INTEGER).
      addIndex('idx_key', ['key']);

  schemaBuilder.createTable('Condition').
      addColumn('CompanyName', lf.Type.STRING).
      addColumn('Sector', lf.Type.STRING).
      addColumn('Stock', lf.Type.STRING).
      addPrimaryKey(['Stock']);

  return schemaBuilder;
}
export default LovefieldService;