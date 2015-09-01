class RegistrationsController < Devise::RegistrationsController
  def create
    respond_to do |format|
      format.json do
        build_resource(sign_up_params)

        if resource.save
          render json: self.resource, status: 201
        else
          render json: { errors: [{ title: 'General error statement', status: 403, detail: "Well, something went wrong..." }] }, status: 422
        end
      end
    end
  end
end
