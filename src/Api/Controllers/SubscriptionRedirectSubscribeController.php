<?php

namespace Flagrow\Bazaar\Api\Controllers;

use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class SubscriptionRedirectSubscribeController extends SubscriptionRedirectController
{
    public function handle(ServerRequestInterface $request)
    {
        $id = Arr::get($request->getQueryParams(), 'id');

        return $this->redirectToFlagrowIOSubscription($id, true);
    }
}
