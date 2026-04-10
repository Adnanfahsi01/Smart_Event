<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        // 1. Les événements tendances (ex: les plus récents ou mis en avant)
        $trendingEvents = Event::with(['ville', 'categorie'])
            ->where('statut', 'publie')
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();

        // 2. Les prochains grands rendez-vous (les plus proches dans le temps)
        $upcomingEvents = Event::with(['ville', 'categorie'])
            ->where('statut', 'publie')
            ->where('date_debut', '>=', now())
            ->orderBy('date_debut', 'asc')
            ->take(2)
            ->get();
            
        return response()->json([
            'trending' => $trendingEvents,
            'upcoming' => $upcomingEvents
        ]);
    }
}
