class SectmastsController < ApplicationController
  def index
  end
  
  def readForIndex
    response = {status:true}
    
    recs = Sectmast.all
    
    response["rows"] = []
    
    recs.each do |rec|
      response["rows"].push(rec)
    end
    response["page"] = 1
    response["total"] = 1
    response["records"] = recs.count
    
    render :json => response
  end

  def update
  end
end
