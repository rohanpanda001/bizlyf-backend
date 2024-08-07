function createdUpdatedMiddleware(schema, next) {
  schema.pre("save", updateTimestamp(next));
}

function updateTimestamp(next) {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
}

module.exports = createdUpdatedMiddleware;
