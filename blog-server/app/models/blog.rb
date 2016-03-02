class Blog < ApplicationRecord
  after_initialize :assign_uuid

  def assign_uuid
    self.uuid ||= SecureRandom.uuid
  end
end
